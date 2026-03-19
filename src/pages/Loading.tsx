import "styles/Loading.scss";

interface LoadingProps {
  progress: number;
}

export default function Loading({ progress }: LoadingProps) {
  let color = "";

  if (progress <= 30) color = "hsl(0,89%,48%)";
  if (progress > 30 && progress < 70) color = "hsl(54,96%,44%)";
  if (progress >= 70) color = "hsl(105, 69%, 50%)";

  return (
    <section className="loadingWrap">
      <div className="loadingCon">
        <strong className="txt">Loading ..</strong>
        <div className="progressBar">
          <span className="percent">{`${progress}%`}</span>
          <svg viewBox="0 0 800 800">
            <defs>
              <pattern
                id="loadingPixel"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 0) scale(40) rotate(0)"
              >
                <rect
                  width="1"
                  height="4"
                  x="0"
                  y="8"
                  fill="hsl(0, 0%, 20%)"
                />
                <rect
                  width="18"
                  height="1"
                  x="1"
                  y="7"
                  fill="hsl(0, 0%, 20%)"
                />
                <rect
                  width="18"
                  height="1"
                  x="1"
                  y="12"
                  fill="hsl(0, 0%, 20%)"
                />
                <rect
                  width="1"
                  height="4"
                  x="19"
                  y="8"
                  fill="hsl(0, 0%, 20%)"
                />

                <rect width={progress * 0.16} height="2" x="2" y="9" fill={color} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loadingPixel)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
