export const login = async (user) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    })
    
    if (!response.ok) {
        alert("Error!")
    }

    const data = await response.json()
    return data
}