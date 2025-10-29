import React, { useState } from 'react';

function PokemonWidget({ showNotification }) {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDisplayVisible, setIsDisplayVisible] = useState(false);

  // Hàm gọi API
  const fetchPokemon = async () => {
    setIsDisplayVisible(true); // Hiển thị khung
    setIsLoading(true);
    setError(null);
    setPokemon(null); // Xóa pokemon cũ

    try {
      // Lấy ID ngẫu nhiên từ 1 đến 898 (Gen 1-7)
      const randomId = Math.floor(Math.random() * 898) + 1;
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Không thể tải dữ liệu Pokémon');
      }
      
      const data = await response.json();
      
      // Lưu trữ dữ liệu cần thiết vào state
      setPokemon({
        name: data.name,
        // Lấy ảnh "official-artwork" cho đẹp
        imageUrl: data.sprites.other['official-artwork'].front_default
      });
      
    } catch (err) {
      setError(err.message);
      // Hiển thị thông báo lỗi
      showNotification('Không thể lấy dữ liệu Pokémon. Vui lòng thử lại.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="api-widget" id="pokemon-widget">
      <h3>API Pokémon</h3>
      <p>Lấy một Pokémon ngẫu nhiên từ PokéAPI.</p>
      <button 
        id="fetch-pokemon-btn" 
        className="api-btn" 
        onClick={fetchPokemon}
        disabled={isLoading} /* Vô hiệu hóa nút khi đang tải */
      >
        {isLoading ? 'Đang tải...' : 'Lấy Pokémon'}
      </button>
      
      <div 
        id="pokemon-display-container" 
        // Các class được áp dụng động dựa trên state
        className={`api-display ${isDisplayVisible ? 'visible' : ''} ${isLoading ? 'loading' : ''}`}
      >
        {/* Hiển thị nội dung dựa trên state (Conditional Rendering) */}
        {isLoading && <h4 className="loading-text">Đang tải Pokémon...</h4>}
        {error && <h4 style={{ color: '#e63946' }}>Oops! Đã có lỗi xảy ra.</h4>}
        {pokemon && (
          <>
            <img src={pokemon.imageUrl} alt={`Ảnh của ${pokemon.name}`} />
            <h4>{pokemon.name}</h4>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonWidget;