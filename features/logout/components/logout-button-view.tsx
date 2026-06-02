import { Button } from "@/components/ui/button";

type LogoutButtonViewProps = {
  onLogout: () => void;
};

export function LogoutButtonView({ onLogout }: LogoutButtonViewProps) {
  return <Button onClick={onLogout}>Logout</Button>;
}
