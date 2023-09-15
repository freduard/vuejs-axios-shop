import { fakeStoreAPI } from '../fakestore_api';

export const getProducts = async () => {
    try {
        const res = await fakeStoreAPI.get('/products');
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const getSingleProduct = async (id) => {
    try {
        const res = await fakeStoreAPI.get(`/products/${id}`);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCategories = async () => {
    try {
        const res = await fakeStoreAPI.get('/products/categories');
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const res = await fakeStoreAPI.get(`/products/category/${category}`);
        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}