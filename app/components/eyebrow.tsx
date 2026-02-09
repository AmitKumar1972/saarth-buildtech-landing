type EyebrowProps = {
  label: string;
};

const Eyebrow = ({ label }: EyebrowProps) => {
  return (
    <div className="flex flex-row items-center opacity-80">
      <hr className="w-16 border-t border-primary-600" />
      <p className="pl-4 text-body-sm font-semibold tracking-widest text-primary-600">
        {label}
      </p>
    </div>
  );
};

export default Eyebrow;
