import { useEffect, useState } from "react";
import { styled } from "styled-components";

import supabase from "../../services/supabase";

import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName = "", avatar } = user?.user_metadata ?? {};
  const [avatarUrl, setAvatarUrl] = useState("/default-user.jpg");

  useEffect(() => {
    if (!avatar) {
      setAvatarUrl("/default-user.jpg");
      return;
    }

    const avatarPath = avatar.startsWith("http")
      ? avatar.match(/\/avatar\/([^?]+)/)?.[1] || avatar
      : avatar;

    async function loadAvatarUrl() {
      const { data, error } = await supabase.storage
        .from("avatar")
        .createSignedUrl(avatarPath, 60);

      if (error || !data?.signedUrl) {
        setAvatarUrl("/default-user.jpg");
        return;
      }

      setAvatarUrl(data.signedUrl);
    }

    loadAvatarUrl();
  }, [avatar]);

  return (
    <StyledUserAvatar>
      <Avatar src={avatarUrl} alt={`avatar of ${fullName}`} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
