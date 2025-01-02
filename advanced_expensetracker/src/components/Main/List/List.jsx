import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Slide,
} from "@mui/material";
import { Delete, MoneyOff } from "@mui/icons-material";

import styles from "./styles";

const List = () => {
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "Wed Dec 16",
    },
    {
      id: 2,
      type: "Expsense",
      category: "Pets",
      amount: 20,
      date: "Wed Dec 16",
    },
    {
      id: 3,
      type: "Income",
      category: "Business",
      amount: 150,
      date: "Wed Dec 16",
    },
  ];

  return (
    <MUIList dense={false} sx={styles.list}>
      {transactions.map((transaction) => {
        return (
          <Slide
            direction="down"
            in
            mountOnEnter
            unmountOnExit
            key={transaction.id}
          >
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick="">
                  <Delete />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={
                    transaction.type === "Income"
                      ? styles.avatarIncome
                      : styles.avatarExpense
                  }
                >
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={transaction.category}
                secondary={`${transaction.amount} - ${transaction.date}`}
              />
            </ListItem>
          </Slide>
        );
      })}
    </MUIList>
  );
};
export default List;
