import { URL } from "node:url"

const baseUrl = process.env.BASE_URL

if (!baseUrl) {
    throw new Error("BASE_URL não definida no .env")
}

type ApiOptions = RequestInit & {
    params?: Record<string, string | number>
}

export default async function api<T>(endpoint: string, options?: ApiOptions): Promise<T> {
    const url = new URL(endpoint, baseUrl)

    // Transforma objetos enviados em options (caso existam) em query params.
    if (options?.params) {
        Object.entries(options.params).forEach(([key, value]) => {
            url.searchParams.append(key, String(value));
        });
    }

    // 
    const res = await fetch(url.toString(), {
        ...options,
        headers: {
            "Content-Type": "application/json",
        }
    })

    if (!res.ok) {
        throw new Error(`erro ${res.status}`)
    }

    return res.json()
}