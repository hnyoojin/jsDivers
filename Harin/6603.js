function ReadFile(callback) {
    const fs = require('fs');

    fs.readFile("6603.txt", "utf8", (err, data) => {
        if (err) {
            console.error("에러 발생", err);
            return;
        }

        const lines = data.split('\r\n');
        callback(lines);
    });
};

function Lotto() {
    this.data = null;
}

Lotto.prototype.saveLottoList = function (listNum, callback) {
    ReadFile((lines) => {
        // listNum이 배열 범위를 벗어나지 않도록 체크
        if (listNum >= lines.length || listNum < 0) {
            callback(new Error("유효하지 않은 리스트 넘버입니다."));
            return;
        }

        const tokenizedList = lines[listNum].split(' ');
        if (tokenizedList[0] !== '0') {
            this.data = tokenizedList;
            callback(null, this); // 에러 없음을 의미하는 콜백 함수 호출, Lotto 객체를 반환
        } else {
            callback(new Error("로또 리스트가 존재하지 않습니다."));
        }
    });
};

Lotto.prototype.pickLottoNum = function (callback) {
    if (!this.data) {
        callback(new Error("로또 데이터가 없습니다. 먼저 saveLottoList를 호출하세요."));
        return;
    }

    const data = this.data.slice(1); // 첫 번째 값을 제외한 나머지
    const resultList = [];

    // 재귀를 통해 모든 조합 기록
    function combine(arr, size, start, current) {
        if (current.length === size) {
            resultList.push(current);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            combine(arr, size, i + 1, current.concat(arr[i]));
        }
    }

    combine(data, 6, 0, []);
    callback(null, resultList);
};

Lotto.prototype.processAllLines = function (lines, index = 0) {
    if (index >= lines.length) {
        console.log("모든 줄 처리가 완료되었습니다.");
        return;
    }

    const currentLine = lines[index];
    this.saveLottoList(index, (err) => {
        if (err) {
            console.error(`Line ${index}: ${err.message}`);
        } else {
            this.pickLottoNum((err, combinations) => {
                if (err) {
                    console.error(`Line ${index}: ${err.message}`);
                } else {
                    console.log(`Line ${index} Combinations:`);
                    console.log(combinations);
                }
                // 다음 줄 처리
                this.processAllLines(lines, index + 1);
            });
        }
    });
};

ReadFile((lines) => {
    const lottoProcessor = new Lotto();
    lottoProcessor.processAllLines(lines);
});
