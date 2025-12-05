Feature: Login en FXReplay
  El sistema debe permitir logins válidos y mostrar errores en logins inválidos.

  Background:
    Given que navego a la página de login

  Scenario: Login válido en FXReplay
    And ingreso el correo "carla.arevilca+testt1222@fxreplay.com"
    And ingreso la contraseña "y%vtMYbh50O#cTT"
    When hago clic en el botón de login
    Then debería ver el dashboard cargado

  Scenario: Login inválido en FXReplay
    And ingreso el correo "fakeuser@example.com"
    And ingreso la contraseña "wrongpassword"
    When hago clic en el botón de login
    Then debería ver un mensaje de error de login
