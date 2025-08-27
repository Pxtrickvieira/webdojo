export function getTodayFormattedDate() {
  const hoje = new Date()
  const dia = String(hoje.getDate()).padStart(2, '0')      // garante 2 dígitos
  const mes = String(hoje.getMonth() + 1).padStart(2, '0') // mês começa em 0
  const ano = hoje.getFullYear()

  return `${dia}/${mes}/${ano}`
}