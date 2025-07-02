function checkAnswer() {
  const correctAnswers = ['a', 'c']; // 正解の選択肢
  const checked = Array.from(document.querySelectorAll('input[name="answer"]:checked'))
                       .map(el => el.value)
                       .sort();

  const resultEl = document.getElementById('result');
  if (JSON.stringify(checked) === JSON.stringify(correctAnswers)) {
    resultEl.textContent = '✅ 正解！よくできました。';
    resultEl.style.color = 'green';
  } else {
    resultEl.textContent = '❌ 不正解…もう一度考えてみてください。';
    resultEl.style.color = 'red';
  }
}
