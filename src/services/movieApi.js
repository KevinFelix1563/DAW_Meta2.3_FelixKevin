const API_KEY = '4426e4bd' 
const BASE_URL = 'https://www.omdbapi.com/'

export const searchMovies = async (params) => {
  // Construimos los parámetros de la URL manualmente
  const queryParams = new URLSearchParams({
    apikey: API_KEY,
    s: params.query,
    type: params.type || 'movie',
    y: params.year || '',
    page: params.page || 1
  })

  // Usamos fetch en lugar de axios
  const response = await fetch(`${BASE_URL}?${queryParams.toString()}`)
  
  // Fetch no lanza error automáticamente con códigos HTTP 400/500, hay que validarlo
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }
  
  // Convertimos la respuesta a JSON
  return await response.json()
}

export const getMovieDetails = async (imdbID) => {
  const queryParams = new URLSearchParams({
    apikey: API_KEY,
    i: imdbID,
    plot: 'full'
  })

  const response = await fetch(`${BASE_URL}?${queryParams.toString()}`)
  
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`)
  }
  
  return await response.json()
}