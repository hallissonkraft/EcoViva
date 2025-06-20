// Simples feedback para o formulário
const form = document.getElementById('contatoForm')
const feedback = document.getElementById('feedback')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // Aqui, normalmente você enviaria para um backend, mas vamos só mostrar feedback
  feedback.textContent = 'Obrigado pela sua mensagem, EcoViva agradece!'
  form.reset()
})
