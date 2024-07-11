/* eslint-disable @next/next/no-img-element */
import { cx } from '@emotion/css';

import { Payment } from '@/types/payment';

type Props = {
  paymentChannel: Payment;
  price: number;
  isSelected: boolean;
  isOffline?: boolean;
  onClick: () => void;
};

export function PaymentChannelCard({
  paymentChannel,
  price,
  isSelected,
  isOffline,
  onClick,
}: Props) {
  const disabled =
    isOffline || Number.isNaN(price) || Number(price) < Number(paymentChannel?.minAmount);
  return (
    <button
      type="button"
      key={paymentChannel.code}
      disabled={disabled}
      className={cx('chakra-button', {
        'just-pay-uf7f1w': !isSelected,
        'just-pay-156ppy1': isSelected,
      })}
      id={`payment-channels-${paymentChannel.code}`}
      onClick={onClick}
    >
      <span
        line-height="52px"
        className={cx({
          'just-pay-1r0t7wi': !isSelected,
          'just-pay-13e7uab': isSelected,
        })}
      />
      <div className="chakra-stack just-pay-1vez22z">
        <div className="just-pay-1tgl5mo">
          <div className="just-pay-1fueskv">
            {/* <img
              alt={paymentChannel.name}
              src={
                paymentChannel.iconUrl
                // .replace('http:', 'https:')
                // .replace(`${BASE_API}/media/`, '/api/media/')
              }
              loading="lazy"
              className="chakra-image just-pay-1vzmaz8"
            /> */}
          </div>
          <span className="chakra-text just-pay-1tgb70l" min-width="50px">
            {disabled ? (
              'Offline'
            ) : (
              <>
                Rp&nbsp;
                {price.toLocaleString('id-ID')}
                ,-
              </>
            )}
          </span>
        </div>
        <span className="chakra-text just-pay-w16bro">
          {Number(price) < Number(paymentChannel?.minAmount)
            ? `Minimal transaksi Rp. ${Number(paymentChannel?.minAmount).toLocaleString('id-ID')}`
            : paymentChannel.name}
        </span>
      </div>
    </button>
  );
}
