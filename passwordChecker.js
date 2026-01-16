// Test modification
function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }

  if (!/\d/.test(password)) {
    return false;
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return false;
  }

  if (password.toLowerCase().includes('ipl')) {
    return false;
  }

  return true;
}

module.exports = { isValidPassword };