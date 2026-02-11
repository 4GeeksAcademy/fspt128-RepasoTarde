export const signup = async (user) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/signup`,
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  if (!response.ok) {
    console.log(data);
    return data
  }
  return {ok: true}

};
