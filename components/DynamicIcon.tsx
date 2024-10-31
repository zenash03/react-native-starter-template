import * as Icon from 'phosphor-react-native';

type IconName = keyof typeof Icon;

interface IconProps {
    icon: IconName;
    color: string;
    weight?: string | "regular";
    size?: number | 22;
}

const DynamicIcon: React.FC<IconProps> = ({ icon, color, weight, size }) => {
    const IconComponent = Icon[icon] as React.ComponentType<{ color: string; size?: number, weight?: string }>;
  
    if (!IconComponent) {
      return null;
    }
  
    return <IconComponent color={color} size={size} weight={weight} />;
};


export default DynamicIcon;