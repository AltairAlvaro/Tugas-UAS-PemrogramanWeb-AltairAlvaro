/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Loader } from '../components/loader';

/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HomePage() {
  const router = useRouter();
  if (router.isFallback) return <Loader />;

  // const allPaymentChannels = paymentChannels.filter((pc) => !['qris', 'wallet'].includes(pc.group));

  return (
    <>
      <div className="just-pay-1dnzllm" />
      <header className="just-pay-1bdn2to">
        <div className="chakra-stack just-pay-foe16h">
          <div className="just-pay-1ki54i">
            <div className="just-pay-1dfetik">
              <Image
                alt="Logo"
                width={176}
                height={42}
                src="/images/logo-transparent.png"
                className="chakra-image just-pay-akxtnp"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="just-pay-cmxy85">
        <main className="just-pay-zke1y">
          <div className="banner">
            <Image
              src="/images/banner-home.png"
              width={448}
              height={180}
              alt="Banner Obaba Store Indonesia"
              priority
            />
          </div>
          <section className="just-pay-1lp32oh">
            <h1 className="chakra-heading just-pay-u4lanl">EA FC 24 ANTI LIMIT</h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 1,
                fontSize: 14,
                marginTop: 16,
              }}
            >
              <span>1. Login Steam, centang remember me</span>
              <span>2. Download EA FC 24</span>
              <span>3. Mainkan mode online 1x, cek video tutorial</span>
              <span>
                4. Video Tutorial{' '}
                <a
                  href="https://www.youtube.com/watch?v=YuVqoP5pOwM"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'blue' }}
                >
                  https://www.youtube.com/watch?v=YuVqoP5pOwM
                </a>
              </span>
              <span>
                5. Download Bahan{' '}
                <a
                  href="https://bit.ly/obabastore-fc24"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'blue' }}
                >
                  https://bit.ly/obabastore-fc24
                </a>
              </span>
            </div>

            <h1 className="chakra-heading just-pay-u4lanl" style={{ marginTop: 16 }}>
              EA FC 24 UPDATE SQUAD
            </h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 1,
                fontSize: 14,
                marginTop: 16,
              }}
            >
              <span>
                1. Matikan Firewall{' '}
                <a
                  href="https://www.linksys.com/be/support-article/?articleNum=143654"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'blue' }}
                >
                  link tutorial
                </a>
              </span>
              <span>2. Steam Mode Online</span>
              <span>3. Play</span>
              <span>4. Update Squad in Game</span>
              <div style={{ marginLeft: 16 }}>
                {'Customize (Ikon Gir Ujung Kiri Atas) -> Edit Teams -> Download Update'}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
