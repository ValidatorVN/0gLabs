import React from 'react';
import { Box, Text, HStack, Icon } from '@chakra-ui/react';
import { MdInfo } from 'react-icons/md';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export const LineChart = ({ 
  title, 
  data, 
  xAxis, 
  yAxis,
  valuePrefix = '',
  valueSuffix = '',
  valueFormatter = (value) => value,
  description
}) => {
  return (
    <Box>
      <HStack mb={4} align="center">
        <Text fontSize="lg" fontWeight="600">
          {title}
        </Text>
        {description && (
          <Icon 
            as={MdInfo} 
            color="gray.400" 
            cursor="help"
            title={description}
          />
        )}
      </HStack>
      <Box h="300px">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis 
              dataKey={xAxis}
              tickFormatter={(value) => new Date(value).toLocaleDateString()}
              stroke="#666"
              fontSize={12}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickFormatter={valueFormatter}
            />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
              formatter={(value) => [valueFormatter(value), yAxis]}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey={yAxis}
              stroke="#B14EFF"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: '#B14EFF' }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}; 