import * as React from 'react';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
    style?: any
    lib?: string
    name: string
    size?: number
    color?: string
    weather?: string[]
}

export const Icon = ({ name, size = 20, color = 'black', style, lib = 'fontawesome', weather = [] }: IconProps) => {

    switch (lib.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()) {
        case "zocial":
            return <IconZocial name={name} color={color} style={{ fontSize: size, ...style }} />
        case "entypo":
            return <IconEntypo name={name} color={color} style={{ fontSize: size, ...style }} />
        case "feather":
            return <IconFeather name={name} color={color} style={{ fontSize: size, ...style }} />
        case "fontisto":
            return <IconFontisto name={name} color={color} style={{ fontSize: size, ...style }} />
        case "ionicons":
            return <IconIonicons name={name} color={color} style={{ fontSize: size, ...style }} />
        case "evilicons":
            return <IconEvilIcons name={name} color={color} style={{ fontSize: size, ...style }} />
        case "octicons":
            return <IconOcticons name={name} color={color} style={{ fontSize: size, ...style }} />
        case "antdesign":
            return <IconAntDesign name={name} color={color} style={{ fontSize: size, ...style }} />
        case "foundation":
            return <IconFoundation name={name} color={color} style={{ fontSize: size, ...style }} />
        case "materialicons":
            return <IconMaterialIcons name={name} color={color} style={{ fontSize: size, ...style }} />
        case "fontawesome":
            return <IconFontAwesome name={name} color={color} style={{ fontSize: size, ...style }} />
        case "fontawesome5":
            return <IconFontAwesome5 name={name} color={color} style={{ fontSize: size, ...style }} />
        case "simplelineicons":
            return <IconSimpleLineIcons name={name} color={color} style={{ fontSize: size, ...style }} />
        case "materialcommunityicons":
            return <IconMaterialCommunityIcons name={name} color={color} style={{ fontSize: size, ...style }} />
        default:
            return <IconFontAwesome name={name} color={color} style={{ fontSize: size, ...style }} />
    }

    // switch (weather[0]) {
    //     case "Sunny":
    //         return <IconIonicons name={'sunny-sharp'} color={color} style={{ fontSize: size, ...style }} />
    //     case "Cloudy":
    //         return <IconFontAwesome name={'Cloud'} color={color} style={{ fontSize: size, ...style }} />
    //     case "Drizzle":
    //         return <IconFeather name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "Mist":
    //         return <IconFontisto name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "Haze":
    //         return <IconFontisto name={'fog'} color={color} style={{ fontSize: size, ...style }} />
    //     case "evilicons":
    //         return <IconEvilIcons name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "octicons":
    //         return <IconOcticons name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "antdesign":
    //         return <IconAntDesign name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "foundation":
    //         return <IconFoundation name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "materialicons":
    //         return <IconMaterialIcons name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "fontawesome":
    //         return <IconFontAwesome name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "fontawesome5":
    //         return <IconFontAwesome5 name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "simplelineicons":
    //         return <IconSimpleLineIcons name={name} color={color} style={{ fontSize: size, ...style }} />
    //     case "materialcommunityicons":
    //         return <IconMaterialCommunityIcons name={name} color={color} style={{ fontSize: size, ...style }} />
    //     default:
    //         return <IconFontAwesome name={name} color={color} style={{ fontSize: size, ...style }} />
    // }
}