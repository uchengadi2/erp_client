import { useState } from "react";

export default function useUserId() {
  const getUserId = () => {
    const userIdString = sessionStorage.getItem("token");
    const userUserId = JSON.parse(userIdString);
    return userUserId?.userId;
  };
  const [userId, setUserId] = useState(getUserId());

  const saveUserId = (userUserId) => {
    if (userUserId !== undefined) {
      sessionStorage.setItem("token", JSON.stringify(userUserId));
      setUserId(userUserId.userId);
    }
  };

  return {
    setUserId: saveUserId,
    userId,
  };
}
