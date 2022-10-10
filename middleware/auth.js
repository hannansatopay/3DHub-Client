export default function ({ store, route }) {
    console.log("Route", route, store.getters.isAuthenticated);
} 