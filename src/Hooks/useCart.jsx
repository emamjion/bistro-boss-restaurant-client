import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const { user, loading } = useAuth();

    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data : cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !loading,
        
        /*
        queryFn: async () => {
            const response = await fetch(`https://bistro-boss-restaurant-server-kappa.vercel.app/carts?email=${user?.email}`, {
                headers : {
                    authorization : `bearer ${token}`
                }
            });
            return response.json();
        },
        */
        
        /* */
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`);
            console.log('res from axios', response)
            return response.data;
        },
        
    })

    return [ cart, refetch ]

}

export default useCart;