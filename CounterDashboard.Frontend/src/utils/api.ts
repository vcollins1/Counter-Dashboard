import type {CounterType, NewCounterType, RequestType} from "./types.ts";

const apiUrl = "http://localhost:5121"

async function request(path: string, options?: RequestType) {
    
    const response = await fetch(`${apiUrl}${path}`, {
    headers: {
        "Content-Type": "application/json"
    },
    ...options});

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

function getCounters() {
    return request("/counter")
}

function createCounter(counter: NewCounterType) {
    return request("/counter", {
        method: "POST",
        body: JSON.stringify(counter)
    })
}

function updateCounter(id: number, counter: CounterType) {
    return request(`/counter/${id}`, {
        method: "PUT",
        body: JSON.stringify(counter)
    })
}

function deleteCounter(id: number) {
    return request(`/counter/${id}`, {
        method: "DELETE"
    })
}

export {getCounters, createCounter, updateCounter, deleteCounter}
