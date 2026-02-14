const API_BASE = "https://fakestoreapi.com";
class FakeStoreApi {
    async getProducts() {
        const response = await fetch(`${API_BASE}/products`);
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
    }
}
export const api = new FakeStoreApi();
