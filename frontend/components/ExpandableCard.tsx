import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

interface ExpandableCardProps {
  title: string;
  content: string;
  cardSx?: any;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  content,
  cardSx,
}) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ ...cardSx }}>
      <CardHeader
        title={title}
        sx={{
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        }}
        onClick={toggleExpanded}
        action={
          <IconButton disabled>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        }
      />
      {expanded && (
        <CardContent>
          {typeof content === 'string' ? (
            <Typography variant="body1">{content}</Typography>
          ) : (
            content
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default ExpandableCard;
