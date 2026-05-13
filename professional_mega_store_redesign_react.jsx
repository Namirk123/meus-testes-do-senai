export default function MegaStoreProfessional() {
  const products = [
    {
      name: 'Smart TV 55” 4K',
      price: 'R$ 2.999',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Notebook Gamer RTX',
      price: 'R$ 6.499',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Smartphone Pro Max',
      price: 'R$ 3.899',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Headset Wireless',
      price: 'R$ 499',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tight">MegaStore</h1>
            <p className="text-sm text-zinc-500">Tecnologia & eletrônicos premium</p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#produtos" className="hover:text-blue-600 transition">Produtos</a>
            <a href="#beneficios" className="hover:text-blue-600 transition">Benefícios</a>
            <a href="#ofertas" className="hover:text-blue-600 transition">Ofertas</a>
            <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
          </nav>

          <button className="bg-zinc-900 text-white px-5 py-2 rounded-xl hover:bg-zinc-700 transition">
            Entrar
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-blue-900"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-1 text-sm text-white mb-6">
              ⚡ Ofertas exclusivas da semana
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Sua loja de tecnologia moderna.
            </h2>

            <p className="mt-6 text-zinc-300 text-lg max-w-xl leading-relaxed">
              Produtos premium, entrega rápida e experiência profissional.
              Tudo o que você precisa em um só lugar.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-white text-zinc-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Comprar agora
              </button>

              <button className="border border-white/30 text-white px-6 py-3 rounded-2xl hover:bg-white/10 transition">
                Ver catálogo
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
              alt="Tecnologia"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Entrega rápida',
              desc: 'Envios para todo o Brasil com rastreamento em tempo real.',
              icon: '🚚'
            },
            {
              title: 'Pagamento seguro',
              desc: 'Pix, cartão e parcelamento com proteção total.',
              icon: '🔒'
            },
            {
              title: 'Suporte premium',
              desc: 'Atendimento rápido e suporte especializado.',
              icon: '💬'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-zinc-600 mt-3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="bg-white py-20 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-blue-600 font-semibold">Produtos em destaque</p>
              <h2 className="text-4xl font-black mt-2">Mais vendidos</h2>
            </div>

            <button className="hidden md:block border border-zinc-300 px-5 py-2 rounded-xl hover:bg-zinc-100 transition">
              Ver todos
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200 hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-2xl font-black mt-3">{product.price}</p>

                  <button className="w-full mt-5 bg-zinc-900 text-white py-3 rounded-2xl hover:bg-blue-700 transition">
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section id="ofertas" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-blue-600 to-indigo-700 p-10 md:p-16 text-white shadow-2xl">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-blue-100">
              Oferta limitada
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              Até 40% OFF em eletrônicos selecionados.
            </h2>

            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              Aproveite descontos exclusivos em notebooks, smartphones,
              acessórios e muito mais.
            </p>

            <button className="mt-8 bg-white text-blue-700 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Aproveitar promoção
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white">
            Receba ofertas exclusivas
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Cadastre seu e-mail e receba novidades e promoções.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-5 py-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-zinc-400 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-white text-2xl font-black">MegaStore</h3>
            <p className="mt-4 leading-relaxed">
              Loja moderna de tecnologia com foco em qualidade,
              velocidade e experiência premium.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Início</a></li>
              <li><a href="#" className="hover:text-white">Produtos</a></li>
              <li><a href="#" className="hover:text-white">Ofertas</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Atendimento</h4>
            <ul className="space-y-3">
              <li>Seg a Sex: 08h às 18h</li>
              <li>Suporte online</li>
              <li>Pagamento seguro</li>
              <li>Entrega nacional</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Redes sociais</h4>
            <div className="flex gap-4 text-2xl">
              <span>📘</span>
              <span>📸</span>
              <span>🎵</span>
              <span>▶️</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-800 mt-12 pt-8 text-sm text-center">
          © 2026 MegaStore — Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
