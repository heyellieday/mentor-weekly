export default function Header({ text }) {
  return (
    <div>
      <div className='header'>
        hello world, {text}
      </div>
      <style jsx>{`
        .header { color: red }
      `}</style>
    </div>
);
}
