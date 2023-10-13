import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const loadImageSecurity = async (urlImagen) => {
  const storage = getStorage();
  const imagenRef = ref(storage, urlImagen);
  const url = await getDownloadURL(imagenRef);
  return url;
}