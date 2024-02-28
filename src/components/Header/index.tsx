import { Image, StatusBar, Text } from "react-native";
import { HeaderStyles, HeaderTitle} from "./styles";
import { FontAwesome6 } from '@expo/vector-icons';

export function Header(){
    return(
        <HeaderStyles>
            <FontAwesome6 name="money-bill-1-wave" size={24} color="#00875f" />            
            <HeaderTitle>FinServer</HeaderTitle>
        </HeaderStyles>
    );
}