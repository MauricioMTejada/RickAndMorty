const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

const validation = (userData) => {
  const errors = {};

  if (!userData.username) {
    errors.username = "No puede estar vacío";
    console.log(
      `---Primer if: errors.username: ${errors.username}; errors.password: ${errors.password}`
    );
  } else {
    if (userData.username.length > 25) {
      errors.username = "El nombre de usuario es demasiado largo";
      console.log(
        `---Segundo if: errors.username: ${errors.username}; errors.password: ${errors.password}`
      );
    } else {
      if (!regexUsername.test(userData.username)) {
        errors.username = "El user debe ser un Email";
        console.log(
          `---Tercer if: errors.username: ${errors.username}; errors.password: ${errors.password}`
        );
      } else {
        errors.username = "";
      }
    }
  }

  if (!regexPassword.test(userData.password)) {
    errors.password =
      `Debe tener al menos un dígito, al menos una letra, mínimo 6 caracteres y máximo 10 caracteres`;
  } else {
    errors.password = "";
  }

  return errors;
};

export default validation;
