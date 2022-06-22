const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const consola = require('consola');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

   consola.start(`
█▀ █▀▀   ▄▀█ ▄▀█ █░░
▄█ █▄▄   █▀█ █▀█ █▄▄
Trophy And Crown Hack Safe! [ReEdit] 
${chalk.yellow('Aal Crown Script (2022 - 06 - 22')}
By : ${chalk.yellow('AalFitrah')} - Credit : @AalFitrah
${chalk.red('Duplikat Crown Only')}
`);

  const auth = rs.question(chalk.bgRed(`Enter Authentication Code! : `));
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

(console.log(`▄█▄   ▄█   █▀▀ █▀█ █▀█ █░█░█ █▄░█\n░▀░   ░█   █▄▄ █▀▄ █▄█ ▀▄▀▄▀ █░▀█
${chalk.blue(`[ ${moment().format('HH:mm:ss')} ] `)} 
# ${chalk.bgRed(`Status : Succes✓`)}
# ${chalk.bgBlue(`Country : ${country}`)}
# ${chalk.green(`User : ${username}`)} 
# ${chalk.yellow(`Trophy : ${trophy}`)} 
# ${chalk.red(`Crown : ${crown}`)}
${chalk.red(`Add 1 Crown + 30 Trophy By Aal Fitrah`)}
${chalk.blue('======================================')}`));
      await sleep(7500);

    } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Your Account has been Banned`));
     break;
    }
  }


})();
