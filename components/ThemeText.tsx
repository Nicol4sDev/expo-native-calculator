import { globalStyles } from '@/styles/global-styles';
import { Text, type TextProps } from 'react-native'

interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}

const ThemeText = ({ children, variant, ...rest }: Props) => {
    return (
        <Text style={[
            { color: 'white' },
            variant === 'h1' ? globalStyles.mainResult : globalStyles.subResult
        ]
        }
        numberOfLines={1}
        adjustsFontSizeToFit
            {...rest}
        >{children}</Text>
    )
}

export default ThemeText