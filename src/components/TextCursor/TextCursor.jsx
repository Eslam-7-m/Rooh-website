import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // تأكد من استيرادها كدة

const TextCursor = ({
  text = 'ROOH',
  spacing = 50, // قللتها عشان الذيل يكون أنعم
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 8, // زودتها لزيادة التأثير البصري
}) => {
  const [trail, setTrail] = useState([]);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  // تعديل: المراقبة هتكون على الـ Window مباشرة مش الـ container
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const createRandomData = () =>
      randomFloat
        ? {
            randomX: Math.random() * 15 - 7.5,
            randomY: Math.random() * 15 - 7.5,
            randomRotate: Math.random() * 20 - 10,
          }
        : {};

    setTrail((prev) => {
      const newTrail = [...prev];

      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...createRandomData(),
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          const computedAngle = followMouseDirection ? rawAngle : 0;

          newTrail.push({
            id: idCounter.current++,
            x: mouseX,
            y: mouseY,
            angle: computedAngle,
            ...createRandomData(),
          });
        }
      }

      return newTrail.length > maxPoints
        ? newTrail.slice(newTrail.length - maxPoints)
        : newTrail;
    });

    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    // التغيير هنا: المراقبة على مستوى الصفحة بالكامل
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [spacing, maxPoints]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    // التغيير هنا: fixed inset-0 عشان يغطي الشاشة كلها
    <div className='fixed inset-0 pointer-events-none z-[10000] overflow-hidden'>
      <AnimatePresence>
        {trail.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, rotate: item.angle }}
            animate={{
              opacity: 1,
              scale: 1,
              x: randomFloat ? [0, item.randomX, 0] : 0,
              y: randomFloat ? [0, item.randomY, 0] : 0,
              rotate: randomFloat
                ? [item.angle, item.angle + item.randomRotate, item.angle]
                : item.angle,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: exitDuration }}
            className='absolute select-none whitespace-nowrap text-white font-bold tracking-widest text-2xl'
            style={{
              left: item.x,
              top: item.y,
              transform: 'translate(-50%, -50%)', // عشان الكلمة تكون في نص الماوس بالظبط
            }}
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextCursor;
