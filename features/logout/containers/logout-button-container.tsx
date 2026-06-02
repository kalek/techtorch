"use client";

import { LogoutButtonView } from "@/features/logout/components/logout-button-view";
import { logout } from "@/features/logout/actions";

export function LogoutButtonContainer() {
  const handleLogout = async () => {
    await logout();
  };

  return <LogoutButtonView onLogout={handleLogout} />;
}
