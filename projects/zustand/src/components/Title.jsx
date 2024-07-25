import { Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { ThemeStyles } from '../context/ThemeStyles';

const Title = ({texto}) => {
    const { colors } = useContext(ThemeContext);
    return <Text style={{ ...styles.text, color:colors.color}}>
        {texto}
    </Text>
}

const styles = StyleSheet.create({
    text: {
      ...ThemeStyles.title,
      fontSize: 16,
    }
  });

export default Title;