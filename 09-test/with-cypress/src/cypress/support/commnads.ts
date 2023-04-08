// 이 부분을 추가해서 사용자 정의 명령을 구현합니다.
Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});
