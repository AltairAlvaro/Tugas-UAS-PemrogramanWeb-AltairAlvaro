/* eslint-disable react/no-danger */
import { Text } from '@chakra-ui/react';
import moment from 'moment';
import QRCodeSVG from 'qrcode-svg';
import svgToImg from 'save-svg-as-png';

type Props = {
  qrString: string;
};

const downloadQR = () => {
  const fileName = `QR-OBABA_${moment().format('YYYY-MM-DD_HH:mm')}`;
  // eslint-disable-next-line unicorn/prefer-query-selector
  return svgToImg.saveSvgAsPng(document.querySelector('.xxx-1ge1d0u > svg'), fileName, {
    scale: 3,
  });
};

export function QRCode({ qrString }: Props) {
  const qrCode = new QRCodeSVG({
    content: qrString || '-',
    container: 'svg',
    width: 256,
    height: 256,
    color: '#000000',
    background: '#ffffff',
    ecl: 'M',
  });

  return (
    <div className="chakra-stack xxx-1jxjhsf">
      <Text className="xxx-itvw0n">Silahkan Scan pada QR Code dibawah ini</Text>
      <div
        className="xxx-1ge1d0u"
        dangerouslySetInnerHTML={{
          __html: qrCode.svg(),
        }}
      />
      <button type="button" className="chakra-button xxx-1lz63a4" onClick={() => downloadQR()}>
        Unduh Kode QR
      </button>
    </div>
  );
}
