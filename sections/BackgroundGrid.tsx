export default function BackgroundGrid(){
  return (
    <div class="fixed w-full h-full px-6 lg:px-20">
      <div class="w-full h-full border-base-content" style={{
        borderLeft: "3px solid",
        background: "white",
        backgroundImage: "radial-gradient(rgb(179 179 179) 1px, transparent 0)",
        backgroundSize: "19px 19px",
        backgroundPosition: "-19px -19px",
      }}>
      </div>
    </div>
  )
}