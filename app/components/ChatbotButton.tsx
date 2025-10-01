'use client';

import { useState } from 'react';

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => setOpen(!open)}
    >
      {open ? 'Fechar Chat' : 'Abrir Chat'}
    </button>
  );
}
