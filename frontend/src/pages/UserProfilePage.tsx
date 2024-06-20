import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateMyUser();

  if (isGetUserLoading) {
    return <span className="text-gray-500 animate-pulse">Loading...</span>;
  }
  if (!currentUser) {
    return (
      <span className="text-red-300">Unable to load current user profile</span>
    );
  }

  return (
    <>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateUserLoading}
      />
    </>
  );
};

export default UserProfilePage;
