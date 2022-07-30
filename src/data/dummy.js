
import { FiBarChart, FiCreditCard} from 'react-icons/fi';
import { BsBoxSeam, BsCurrencyDollar, BsShield, BsFillCalendarEventFill} from 'react-icons/bs';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import {GrLocation} from 'react-icons/gr';
import {AiOutlineNumber} from 'react-icons/ai';
import {SiVirustotal} from 'react-icons/si';

export const earningData = [
    {
      icon: <BsFillCalendarEventFill />,
      amount: 'DD/MM/YYYY',
      title: 'DT CREATED',
      iconColor: '#000000',
      iconBg: '#E5E7EB',
      pcColor: 'red-600',
    },
    {
      icon: <GrLocation />,
      amount: 'Main hub',
      title: 'RECEIVED',
      iconColor: '#000000',
    },
    {
      icon: <AiOutlineNumber />,
      amount: '01292',
      title: 'ORDER NO.',
      iconColor: '#000000',
    },
    {
      icon: <SiVirustotal />,
      amount: '4',
      title: 'QUANTITY',
      iconColor: '#000000',
    },
  ];
  
  export const recentTransactions = [
    {
      icon: <BsCurrencyDollar />,
      amount: '+$350',
      title: 'Paypal Transfer',
      desc: 'Money Added',
      iconColor: '#000000',
      iconBg: '#E5E7EB',
      pcColor: 'green-600',
    },
    {
      icon: <BsShield />,
      amount: '-$560',
      desc: 'Bill Payment',
      title: 'Wallet',
      iconColor: '#000000',
      iconBg: '#E5E7EB',
      pcColor: 'red-600',
    },
    {
      icon: <FiCreditCard />,
      amount: '+$350',
      title: 'Credit Card',
      desc: 'Money reversed',
      iconColor: '#000000',
      iconBg: '#E5E7EB',
  
      pcColor: 'green-600',
    },
    {
      icon: <TiTick />,
      amount: '+$350',
      title: 'Bank Transfer',
      desc: 'Money Added',
  
      iconColor: '#000000',
      iconBg: '#E5E7EB',
      pcColor: 'green-600',
    },
    {
      icon: <BsCurrencyDollar />,
      amount: '-$50',
      percentage: '+38%',
      title: 'Refund',
      desc: 'Payment Sent',
      iconColor: '#000000',
      iconBg: '#E5E7EB',
      pcColor: 'red-600',
    },
  ];