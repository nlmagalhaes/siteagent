export function ChatbotButton() {
  return (
    <div className="fixed bottom-6 right-6">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => alert('Abrir chat com Athena')}
      >
        💬 Fale com Athena
      </button>
    </div>
  );
}
