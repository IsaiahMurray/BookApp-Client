import axios, { AxiosResponse } from 'axios';

export const getToken = (): string | null => {
  const storedToken: string | null = localStorage.getItem("token");
  if (storedToken !== null) {
    return storedToken;
  } else {
    return null
  }
}

export const updateToken = (newToken: string): void => {
  localStorage.setItem("token", newToken);
};

export const clearToken = (): null => {
  localStorage.clear();
  return null
};

export const postData = async (url: string, bodyData?: Record<string, unknown>) => {
  //* console.log(url);
  //* console.log(bodyData)
  try {
    const res: AxiosResponse = await axios.post(url, bodyData);
    console.log(res.data)
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error);
    } else {
      console.error("General error:", error);
    }
  }
};