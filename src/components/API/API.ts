import axios, {  AxiosRequestConfig, AxiosResponse } from 'axios';

export const getToken = (): string => {
  const storedToken: string | null = localStorage.getItem("token");
  if (storedToken !== null) {
    return String(storedToken);
  } else {
    return "null"
  }
}

export const updateToken = (newToken: string): void => {
  localStorage.setItem("token", newToken);
};

export const clearToken = (): null => {
  localStorage.clear();
  return null
};

export const headers: AxiosRequestConfig['headers'] = {
  "Authorization": getToken(),
  "Content-Type": "application/json"
}

export const postData = async (url: string, bodyData: Record<string, unknown>) => {
   console.log(bodyData)
  try {
    const res: AxiosResponse = await axios.post(url, bodyData, {headers});
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

export const getData = async (url: string, query?: number[]) => {
  try {
    if(query){
      const queryParams = {
        numbers: query.join(','), // Convert array to comma-separated string
      };
      const res = await axios.get(url, {params: queryParams});
      console.log(res);
      return res;
    }

    const res: AxiosResponse = await axios.get(url);

     console.log(res.data);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response.data);
    } else {
      console.error("General error:", error);
    }
  }
};

export const updateData = async (url: string, bodyData?: Record<string, unknown>) => {
  try {
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: getToken()
      }),
    });
    const data = await res.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteData = async (url: string) => {
  try {
    const res: AxiosResponse = await axios.delete(url, { headers });
    //* console.log(res.data)
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error);
    } else {
      console.error("General error:", error);
    }
  }
}

