let access = () => {
    let age: number = Number(prompt('Совершеннолетний?', ''))
    age >= 18 
      ? console.log('Страница доступна') 
      : console.log('Страница не доступна');
}
access()