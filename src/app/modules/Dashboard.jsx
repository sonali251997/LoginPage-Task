import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/slices/authSlice";
import Loader from "../../components/Loader";

const Dashboard = () => {

    const dispatch = useDispatch();
    const name = useSelector(state => {
        return `${state.auth.firstName} ${state.auth.lastName}`.trim();
    })
    const email = useSelector(state => {
        return state.auth.email;
    })
    const image  = useSelector(state => {
        return state.auth.image;
    })

    const loading= useSelector(state => {
        return state.auth.laoding;
    })

    const handleLogout = () => {
        dispatch(logoutUser());
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            {/* Welcome Text */}
            <h1 className="text-2xl font-medium text-gray-700 mb-10">
                Welcome to{" "}
                <span className="font-bold text-purple-600">Unstop</span>
            </h1>

            {/* Profile Card */}
            <div className="bg-white shadow-md rounded-2xl p-6 w-80 flex flex-col items-center">
                <img
                    src={image}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-500">{email}</p>
                <p className="text-sm text-gray-500 mb-4">Female</p>
                <button
                    type="submit"
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    LogOut
                    <Loader isLoading={loading} />
                  </button>
            </div>
        </div>
    );
}


export default Dashboard;