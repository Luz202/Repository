Feature: Login en FXReplay

  Scenario: Login válido en FXReplay
    Given que navego a la página de login
    When inicio sesión con usuario válido
    Then debería ver el dashboard cargado

  Scenario: Login inválido en FXReplay
    Given que navego a la página de login
    When inicio sesión con usuario inválido
    Then debería ver un mensaje de error de login


 

