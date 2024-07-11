import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureReturn,
} from '@chakra-ui/react';

type Props = {
  useDisclosure: UseDisclosureReturn;
  onConfirm: (e?: string) => void;
  orderDetail: {
    productName?: string;
    productPrice?: number;
    paymentMethod?: string;
  };
  payload: {
    data: {
      [x: string]: string;
    };
    productId: number;
    productItemId: number;
    paymentChannelId: number;
    username: string;
    phoneNumber: string;
    voucher: string;
  };
  isLoading: boolean;
};

export function ModalOrderConfirmation({
  useDisclosure,
  orderDetail,
  payload,
  onConfirm,
  isLoading,
}: Props) {
  const { isOpen, onClose } = useDisclosure;

  return (
    <ModalChakra
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent className="just-pay-tq0xvj">
        <ModalHeader className="just-pay-7aviap">Detail Pesanan</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p className="chakra-text just-pay-acwcvw">Mohon konfirmasi pesanan anda sudah benar.</p>
          <div className="just-pay-wbncsf">
            <p className="chakra-text just-pay-13brihr">Username:</p>
            <div className="just-pay-17xejub" />
            <div className="just-pay-u4p24i">
              <p className="chakra-text just-pay-35ezg3">{payload.username}</p>
            </div>
          </div>
          <div className="just-pay-wbncsf">
            <p className="chakra-text just-pay-13brihr">Layanan</p>
            <div className="just-pay-17xejub" />
            <div className="just-pay-u4p24i">
              <p className="chakra-text just-pay-35ezg3">{orderDetail.productName}</p>
            </div>
          </div>
          <div className="just-pay-wbncsf">
            <p className="chakra-text just-pay-13brihr">Harga</p>
            <div className="just-pay-17xejub" />
            <div className="just-pay-u4p24i">
              <p className="chakra-text just-pay-35ezg3">
                Rp&nbsp;{orderDetail.productPrice?.toLocaleString('id-ID')},-
              </p>
            </div>
          </div>
          <div className="just-pay-wbncsf">
            <p className="chakra-text just-pay-13brihr">Nomor Handphone:</p>
            <div className="just-pay-17xejub" />
            <div className="just-pay-u4p24i">
              <p className="chakra-text just-pay-35ezg3">{payload.phoneNumber}</p>
            </div>
          </div>
          <div className="just-pay-wbncsf">
            <p className="chakra-text just-pay-13brihr">Bayar dengan</p>
            <div className="just-pay-17xejub" />
            <div className="just-pay-u4p24i">
              <p className="chakra-text just-pay-35ezg3">{orderDetail.paymentMethod}</p>
            </div>
          </div>
          <p className="chakra-text my-2">Data</p>
          {Object.entries(payload.data).map(([key, val]) => (
            <div key={key} className="just-pay-wbncsf">
              <p className="chakra-text just-pay-13brihr capitalize">{key}:</p>
              <div className="just-pay-17xejub" />
              <div className="just-pay-u4p24i">
                <p className="chakra-text just-pay-35ezg3">{val}</p>
              </div>
            </div>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button disabled={isLoading} type="button" className="just-pay-ngcla3" onClick={onClose}>
            Cancel
          </Button>
          {/* <button
            type="submit"
            className="chakra-button just-pay-ngcla3"
            id="btn-confirm-order"
            onClick={() => onConfirm(WHATSAPP_NO_ADMIN_1)}
          >
            Admin Fajri
          </button>
          <button
            type="submit"
            className="chakra-button just-pay-7ukusd"
            id="btn-confirm-order"
            onClick={() => onConfirm(WHATSAPP_NO_ADMIN_2)}
          >
            Admin Aro
          </button> */}

          <Button
            type="submit"
            className="just-pay-7ukusd"
            id="btn-confirm-order"
            onClick={() => onConfirm()}
            isLoading={isLoading}
            loadingText="Processing .."
          >
            Konfirmasi
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
}
