
'use client'
import { products } from '../constants';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const ProductCard = ({ product, delay }) => {
    const { ref, animationClasses } = useAnimateOnScroll();
    return (
        <div ref={ref} className={`bg-white rounded-xl overflow-hidden shadow-lg group ${animationClasses}`} style={{transitionDelay: `${delay}ms`}}>
            <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col items-start h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
                <a href="#cotizar" className="mt-auto inline-block bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300">
                    Cotizar Aquí
                </a>
            </div>
        </div>
    );
};

const Products = () => {
  return (
    <section id="productos" className="py-24 bg-yellow-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-gray-900">Nuestros Productos</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            Soluciones de seguro diseñadas para cada etapa de tu vida. Encuentra la cobertura perfecta para ti.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;