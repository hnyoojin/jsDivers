let nickname = ['joonas'];
const input = prompt('사용하실 아이디를 입력해주세요.');

let findNickname = nickname.find('joonas');
findNickname == undefined ? console.log('사용가능한 아이디입니다.') : console.log(`${ input } ??!`);