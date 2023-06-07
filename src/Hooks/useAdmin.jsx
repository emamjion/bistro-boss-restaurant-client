import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
    const [ axiosSecure ] = useAxiosSecure();
    
    // use axios secure with react query
    const { data : isAdmin, isLoading : isAdminLoading } = useQuery({
        // queryKey er maddhome cash kora hoi. - cash kora mane client site a store kore rakha.
        queryKey : ['isAdmin', user?.email],
        queryFn : async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('is Admin response', res);
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
}
export default useAdmin;